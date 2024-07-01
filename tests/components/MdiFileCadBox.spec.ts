
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCadBox from "../../src/components/MdiFileCadBox.vue";

test("MdiFileCadBox snapshot", () => {
  const wrapper = mount(MdiFileCadBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
