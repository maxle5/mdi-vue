
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusBox from "../../src/components/MdiPlusBox.vue";

test("MdiPlusBox snapshot", () => {
  const wrapper = mount(MdiPlusBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
