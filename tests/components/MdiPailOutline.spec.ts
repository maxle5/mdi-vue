
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailOutline from "../../src/components/MdiPailOutline.vue";

test("MdiPailOutline snapshot", () => {
  const wrapper = mount(MdiPailOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
