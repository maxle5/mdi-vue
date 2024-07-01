
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGift from "../../src/components/MdiGift.vue";

test("MdiGift snapshot", () => {
  const wrapper = mount(MdiGift, {});
  expect(wrapper.html()).toMatchSnapshot();
});
