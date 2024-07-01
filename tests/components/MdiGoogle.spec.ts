
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogle from "../../src/components/MdiGoogle.vue";

test("MdiGoogle snapshot", () => {
  const wrapper = mount(MdiGoogle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
