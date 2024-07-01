
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableLarge from "../../src/components/MdiTableLarge.vue";

test("MdiTableLarge snapshot", () => {
  const wrapper = mount(MdiTableLarge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
