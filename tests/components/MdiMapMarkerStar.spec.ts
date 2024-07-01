
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerStar from "../../src/components/MdiMapMarkerStar.vue";

test("MdiMapMarkerStar snapshot", () => {
  const wrapper = mount(MdiMapMarkerStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
