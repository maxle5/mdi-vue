
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMaterialUi from "../../src/components/MdiMaterialUi.vue";

test("MdiMaterialUi snapshot", () => {
  const wrapper = mount(MdiMaterialUi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
