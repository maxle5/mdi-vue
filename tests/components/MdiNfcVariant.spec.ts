
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNfcVariant from "../../src/components/MdiNfcVariant.vue";

test("MdiNfcVariant snapshot", () => {
  const wrapper = mount(MdiNfcVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
