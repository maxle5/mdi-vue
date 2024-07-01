
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageArea from "../../src/components/MdiImageArea.vue";

test("MdiImageArea snapshot", () => {
  const wrapper = mount(MdiImageArea, {});
  expect(wrapper.html()).toMatchSnapshot();
});
