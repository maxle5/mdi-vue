
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageDraw from "../../src/components/MdiMessageDraw.vue";

test("MdiMessageDraw snapshot", () => {
  const wrapper = mount(MdiMessageDraw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
