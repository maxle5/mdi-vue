
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePresentationBox from "../../src/components/MdiFilePresentationBox.vue";

test("MdiFilePresentationBox snapshot", () => {
  const wrapper = mount(MdiFilePresentationBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
