
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMarkerOutline from "../../src/components/MdiArchiveMarkerOutline.vue";

test("MdiArchiveMarkerOutline snapshot", () => {
  const wrapper = mount(MdiArchiveMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
