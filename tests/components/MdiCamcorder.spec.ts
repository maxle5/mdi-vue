
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCamcorder from "../../src/components/MdiCamcorder.vue";

test("MdiCamcorder snapshot", () => {
  const wrapper = mount(MdiCamcorder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
