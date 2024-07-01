
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNfcTap from "../../src/components/MdiNfcTap.vue";

test("MdiNfcTap snapshot", () => {
  const wrapper = mount(MdiNfcTap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
