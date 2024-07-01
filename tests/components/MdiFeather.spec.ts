
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFeather from "../../src/components/MdiFeather.vue";

test("MdiFeather snapshot", () => {
  const wrapper = mount(MdiFeather, {});
  expect(wrapper.html()).toMatchSnapshot();
});
