
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewModule from "../../src/components/MdiViewModule.vue";

test("MdiViewModule snapshot", () => {
  const wrapper = mount(MdiViewModule, {});
  expect(wrapper.html()).toMatchSnapshot();
});
