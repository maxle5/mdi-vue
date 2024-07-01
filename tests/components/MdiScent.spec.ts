
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScent from "../../src/components/MdiScent.vue";

test("MdiScent snapshot", () => {
  const wrapper = mount(MdiScent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
