
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarbudsOffOutline from "../../src/components/MdiEarbudsOffOutline.vue";

test("MdiEarbudsOffOutline snapshot", () => {
  const wrapper = mount(MdiEarbudsOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
