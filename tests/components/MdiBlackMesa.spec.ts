
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlackMesa from "../../src/components/MdiBlackMesa.vue";

test("MdiBlackMesa snapshot", () => {
  const wrapper = mount(MdiBlackMesa, {});
  expect(wrapper.html()).toMatchSnapshot();
});
