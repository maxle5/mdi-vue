
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDresser from "../../src/components/MdiDresser.vue";

test("MdiDresser snapshot", () => {
  const wrapper = mount(MdiDresser, {});
  expect(wrapper.html()).toMatchSnapshot();
});
