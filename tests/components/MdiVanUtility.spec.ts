
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVanUtility from "../../src/components/MdiVanUtility.vue";

test("MdiVanUtility snapshot", () => {
  const wrapper = mount(MdiVanUtility, {});
  expect(wrapper.html()).toMatchSnapshot();
});
