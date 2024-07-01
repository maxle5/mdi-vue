
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandCoinOutline from "../../src/components/MdiHandCoinOutline.vue";

test("MdiHandCoinOutline snapshot", () => {
  const wrapper = mount(MdiHandCoinOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
