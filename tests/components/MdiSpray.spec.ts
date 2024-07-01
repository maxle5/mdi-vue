
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpray from "../../src/components/MdiSpray.vue";

test("MdiSpray snapshot", () => {
  const wrapper = mount(MdiSpray, {});
  expect(wrapper.html()).toMatchSnapshot();
});
