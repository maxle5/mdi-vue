
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDraw from "../../src/components/MdiDraw.vue";

test("MdiDraw snapshot", () => {
  const wrapper = mount(MdiDraw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
