
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCableData from "../../src/components/MdiCableData.vue";

test("MdiCableData snapshot", () => {
  const wrapper = mount(MdiCableData, {});
  expect(wrapper.html()).toMatchSnapshot();
});
