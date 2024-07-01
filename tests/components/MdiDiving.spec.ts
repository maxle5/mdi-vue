
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiving from "../../src/components/MdiDiving.vue";

test("MdiDiving snapshot", () => {
  const wrapper = mount(MdiDiving, {});
  expect(wrapper.html()).toMatchSnapshot();
});
