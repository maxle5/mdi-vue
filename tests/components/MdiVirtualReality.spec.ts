
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVirtualReality from "../../src/components/MdiVirtualReality.vue";

test("MdiVirtualReality snapshot", () => {
  const wrapper = mount(MdiVirtualReality, {});
  expect(wrapper.html()).toMatchSnapshot();
});
