
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseMarkerOutline from "../../src/components/MdiDatabaseMarkerOutline.vue";

test("MdiDatabaseMarkerOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
