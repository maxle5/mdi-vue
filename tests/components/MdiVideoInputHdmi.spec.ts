
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoInputHdmi from "../../src/components/MdiVideoInputHdmi.vue";

test("MdiVideoInputHdmi snapshot", () => {
  const wrapper = mount(MdiVideoInputHdmi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
