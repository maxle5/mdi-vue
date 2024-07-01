
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPan from "../../src/components/MdiPan.vue";

test("MdiPan snapshot", () => {
  const wrapper = mount(MdiPan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
