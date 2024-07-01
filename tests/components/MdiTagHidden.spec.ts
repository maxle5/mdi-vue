
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagHidden from "../../src/components/MdiTagHidden.vue";

test("MdiTagHidden snapshot", () => {
  const wrapper = mount(MdiTagHidden, {});
  expect(wrapper.html()).toMatchSnapshot();
});
