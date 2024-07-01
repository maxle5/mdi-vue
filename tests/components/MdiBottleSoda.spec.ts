
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleSoda from "../../src/components/MdiBottleSoda.vue";

test("MdiBottleSoda snapshot", () => {
  const wrapper = mount(MdiBottleSoda, {});
  expect(wrapper.html()).toMatchSnapshot();
});
