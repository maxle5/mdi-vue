
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTeddyBear from "../../src/components/MdiTeddyBear.vue";

test("MdiTeddyBear snapshot", () => {
  const wrapper = mount(MdiTeddyBear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
