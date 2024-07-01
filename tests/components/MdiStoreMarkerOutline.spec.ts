
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreMarkerOutline from "../../src/components/MdiStoreMarkerOutline.vue";

test("MdiStoreMarkerOutline snapshot", () => {
  const wrapper = mount(MdiStoreMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
