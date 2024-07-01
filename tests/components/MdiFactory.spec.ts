
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFactory from "../../src/components/MdiFactory.vue";

test("MdiFactory snapshot", () => {
  const wrapper = mount(MdiFactory, {});
  expect(wrapper.html()).toMatchSnapshot();
});
