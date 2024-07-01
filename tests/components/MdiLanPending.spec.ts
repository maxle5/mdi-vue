
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanPending from "../../src/components/MdiLanPending.vue";

test("MdiLanPending snapshot", () => {
  const wrapper = mount(MdiLanPending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
