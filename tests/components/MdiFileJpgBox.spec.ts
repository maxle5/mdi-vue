
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileJpgBox from "../../src/components/MdiFileJpgBox.vue";

test("MdiFileJpgBox snapshot", () => {
  const wrapper = mount(MdiFileJpgBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
