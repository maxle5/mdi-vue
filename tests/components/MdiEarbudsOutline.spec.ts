
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarbudsOutline from "../../src/components/MdiEarbudsOutline.vue";

test("MdiEarbudsOutline snapshot", () => {
  const wrapper = mount(MdiEarbudsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
