
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTuneVerticalVariant from "../../src/components/MdiTuneVerticalVariant.vue";

test("MdiTuneVerticalVariant snapshot", () => {
  const wrapper = mount(MdiTuneVerticalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
