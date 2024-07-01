
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseMarker from "../../src/components/MdiDatabaseMarker.vue";

test("MdiDatabaseMarker snapshot", () => {
  const wrapper = mount(MdiDatabaseMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
