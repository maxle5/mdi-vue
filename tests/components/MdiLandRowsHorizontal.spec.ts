
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandRowsHorizontal from "../../src/components/MdiLandRowsHorizontal.vue";

test("MdiLandRowsHorizontal snapshot", () => {
  const wrapper = mount(MdiLandRowsHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
