
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiBox from "../../src/components/MdiPiBox.vue";

test("MdiPiBox snapshot", () => {
  const wrapper = mount(MdiPiBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
