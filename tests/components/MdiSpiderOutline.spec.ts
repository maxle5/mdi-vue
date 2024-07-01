
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpiderOutline from "../../src/components/MdiSpiderOutline.vue";

test("MdiSpiderOutline snapshot", () => {
  const wrapper = mount(MdiSpiderOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
