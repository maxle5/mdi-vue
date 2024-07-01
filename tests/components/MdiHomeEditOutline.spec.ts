
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeEditOutline from "../../src/components/MdiHomeEditOutline.vue";

test("MdiHomeEditOutline snapshot", () => {
  const wrapper = mount(MdiHomeEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
