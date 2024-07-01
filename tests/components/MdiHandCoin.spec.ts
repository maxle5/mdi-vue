
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandCoin from "../../src/components/MdiHandCoin.vue";

test("MdiHandCoin snapshot", () => {
  const wrapper = mount(MdiHandCoin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
