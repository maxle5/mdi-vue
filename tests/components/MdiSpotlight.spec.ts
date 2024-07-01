
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpotlight from "../../src/components/MdiSpotlight.vue";

test("MdiSpotlight snapshot", () => {
  const wrapper = mount(MdiSpotlight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
