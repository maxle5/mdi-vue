
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterHdr from "../../src/components/MdiImageFilterHdr.vue";

test("MdiImageFilterHdr snapshot", () => {
  const wrapper = mount(MdiImageFilterHdr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
