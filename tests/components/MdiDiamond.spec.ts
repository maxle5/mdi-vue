
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiamond from "../../src/components/MdiDiamond.vue";

test("MdiDiamond snapshot", () => {
  const wrapper = mount(MdiDiamond, {});
  expect(wrapper.html()).toMatchSnapshot();
});
