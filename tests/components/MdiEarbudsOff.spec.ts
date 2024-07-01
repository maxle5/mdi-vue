
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarbudsOff from "../../src/components/MdiEarbudsOff.vue";

test("MdiEarbudsOff snapshot", () => {
  const wrapper = mount(MdiEarbudsOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
