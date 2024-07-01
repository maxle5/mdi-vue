
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePdfBox from "../../src/components/MdiFilePdfBox.vue";

test("MdiFilePdfBox snapshot", () => {
  const wrapper = mount(MdiFilePdfBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
