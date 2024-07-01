
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetTopBox from "../../src/components/MdiSetTopBox.vue";

test("MdiSetTopBox snapshot", () => {
  const wrapper = mount(MdiSetTopBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
