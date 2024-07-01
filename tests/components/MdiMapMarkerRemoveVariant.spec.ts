
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRemoveVariant from "../../src/components/MdiMapMarkerRemoveVariant.vue";

test("MdiMapMarkerRemoveVariant snapshot", () => {
  const wrapper = mount(MdiMapMarkerRemoveVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
